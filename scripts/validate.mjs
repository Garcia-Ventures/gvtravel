import { spawnSync } from 'node:child_process';
import process from 'node:process';

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

  // 4. Tests (Check if test script exists in package.json)
  // For now, we see there is no test script, but we can add a placeholder or skip if not found.
  // We'll skip it for now to avoid errors, as observed in package.json.

  // 5. Build
  if (!runCommand('yarn', ['build'], 'Build')) {
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
