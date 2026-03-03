import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
const isFix = args.includes('--fix');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

function runCommand(command, args, name) {
  console.log(`\n${colors.bright}${colors.cyan}=== Running ${name} ===${colors.reset}`);
  const result = spawnSync(command, args, { stdio: 'inherit', shell: true });

  if (result.status !== 0) {
    console.error(`\n${colors.red}✖ ${name} failed!${colors.reset}`);
    return false;
  }

  console.log(`${colors.green}✔ ${name} passed!${colors.reset}`);
  return true;
}

function runRegressionChecks() {
  console.log(`\n${colors.bright}${colors.cyan}=== Running Regression Checks ===${colors.reset}`);

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const formFilePath = path.resolve(__dirname, '../components/TripInquiryForm.tsx');

  if (!fs.existsSync(formFilePath)) {
    console.error(`${colors.red}✖ Regression check failed: TripInquiryForm.tsx not found.${colors.reset}`);
    return false;
  }

  const source = fs.readFileSync(formFilePath, 'utf8');
  const checks = [
    {
      label: 'Submit must not forward event object to Formspree',
      passed: !/handleFormspreeSubmit\(event\s+as\s+React\.FormEvent<\s*HTMLFormElement\s*>\)/.test(source),
    },
    {
      label: 'Submit should use value-based Formspree payload',
      passed:
        /handleFormspreeSubmit\(\{[\s\S]*'trip-type':\s*values\.tripType[\s\S]*consent:\s*values\.consent\s*\?\s*'yes'\s*:\s*'no'[\s\S]*\}\)/.test(
          source,
        ),
    },
    {
      label: 'Form submit should stay wired through react-hook-form handleSubmit',
      passed: /onSubmit=\{form\.handleSubmit\(onSubmit\)\}/.test(source),
    },
    {
      label: 'Form submit should not bypass react-hook-form with direct Formspree handler',
      passed: !/onSubmit=\{handleFormspreeSubmit\}/.test(source),
    },
  ];

  const failedChecks = checks.filter((check) => !check.passed);
  if (failedChecks.length > 0) {
    for (const failedCheck of failedChecks) {
      console.error(`${colors.red}✖ ${failedCheck.label}${colors.reset}`);
    }
    return false;
  }

  console.log(`${colors.green}✔ Regression checks passed!${colors.reset}`);
  return true;
}

async function validate() {
  const startTime = Date.now();
  let success = true;

  // 1. Formatting
  const formatArgs = isFix ? ['--write', '.'] : ['--check', '.'];
  if (!runCommand('npx prettier', formatArgs, 'Formatting')) {
    success = false;
    if (!isFix) {
      console.log(`${colors.yellow}Tip: Run with --fix to automatically fix formatting.${colors.reset}`);
    }
  }

  // 2. Linting
  const lintArgs = isFix ? ['.', '--cache', '--fix'] : ['.', '--cache'];
  if (!runCommand('npx eslint', lintArgs, 'Linting')) {
    success = false;
  }

  // 3. Type Checking
  if (!runCommand('npx tsc', ['--noEmit'], 'Type Checking')) {
    success = false;
  }

  // 4. Regression Checks
  if (!runRegressionChecks()) {
    success = false;
  }

  // 5. Build
  if (!runCommand('bun', ['run', 'build'], 'Build')) {
    success = false;
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  if (success) {
    console.log(`\n${colors.bright}${colors.green}✨ All validation checks passed in ${duration}s!${colors.reset}\n`);
    process.exit(0);
  } else {
    console.error(
      `\n${colors.bright}${colors.red}❌ Validation failed in ${duration}s. Please fix the issues above.${colors.reset}\n`,
    );
    process.exit(1);
  }
}

validate();
