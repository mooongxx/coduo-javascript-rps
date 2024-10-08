class Random {
  /**
   * @returns {string} - '가위', '바위', '보' 중 하나를 무작위로 반환.
   *
   * @example
   * const random = Random.getRandomRPS();
   */
  static getRandomRPS() {
    const choices = ['가위', '바위', '보'];
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
  }
}

export default Random;
