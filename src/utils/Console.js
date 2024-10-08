import readline from 'readline';

class Console {
  /**
   * @param {string} query
   * @returns {Promise<string>}
   *
   * @example
   * const input = await Console.readLineAsync('이름을 입력하세요: ');
   */
  static readLineAsync(query) {
    const readLine = readline.createInterface({ input: process.stdin, output: process.stdout });

    return new Promise((resolve) => {
      readLine.question(query, (input) => {
        readLine.close();
        resolve(input);
      });
    });
  }

  /**
   * @param {string} message
   *
   * @example
   * Console.print('Hello World!');
   */
  static print(message) {
    console.log(message);
  }
}

export default Console;
