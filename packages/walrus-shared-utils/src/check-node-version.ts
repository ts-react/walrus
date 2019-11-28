import chalk from 'chalk';
import { satisfies } from 'semver';

/**
 * 检查Node版本
 * @param wanted 需要兼容的版本
 * @param id 需要提示的 cli name
 */
export default function checkNodeVersion(wanted, id) {
  if (!satisfies(process.version, wanted)) {
    console.log(
      chalk.red(
        'You are using Node ' +
          process.version +
          ', but this version of ' +
          id +
          ' requires Node ' +
          wanted +
          '.\nPlease upgrade your Node version.'
      )
    );
    process.exit(1);
  }
}
