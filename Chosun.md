##안녕하세요! 프로젝트 잘 봤습니다! 지금 제가 대학생인데
깃허브 프로젝트를 활용하여 내용에 대한 수정사항 및 개선방안을
제안드리고 풀리퀘스트를 받는 레포트를 작성하고있습니다! 그래서
제가 제안드리는 내용이 비록 부실하더라도 조금만 넓은 아량으로 받아주시면
감사드리겠습니다... ㅠㅠ

제가 내용을 쭉 읽어봤을 때, 더 수정했으면 좋겠다는 사안이 있었습니다
예를들어서, 잘못된 입력을 받았을 때 즉시 종료되는 것 보다는 다시 입력할 수 있게 하는건 어떨까요? 자신이 매우 큰 스코어로 이기는 도중에 잘못된 입력 하나로 게임이 종료가 되어버린다면 속상하지 않을까 하는 생각에 적어봤습니다! 그리고 작성해주신 코드로 인해 발생할 수 있는 오류가 있었습니다! 입력 처리부분에서는 예외를 처리하기 위해선 try-catch문을 사용하는 것이 좋을 것 같습니다! 그리고 게임이 종료된 후 승패과 관계없이 재시작을 할 수 있는 기능도 추가하면 좋을 것 같습니다! 한 판만 진행하면 아쉽잖아요! 그리고 처음 말씀드린 것처럼 잘못된 입력이 들어오면 입력 루프를 돌려 올바른 값을 받을 수 있게 다시 기회를 주는 것도 생각해보았습니다.

제가 예시 코드를 작성해보았습니다. 부족하지만 간단하게만 봐주시면 감사하겠습니다!

import java.util.Random;
import java.util.Scanner;

public class RockPaperScissorsGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        // 게임 규칙 안내
        System.out.println("가위바위보 게임을 시작합니다!");
        System.out.println("게임에서 이겨야 할 횟수를 입력해주세요 (최대 5회): ");

        // 승리 횟수 입력 받기
        int requiredWins = getValidWins(scanner);
        int userWins = 0;
        int computerWins = 0;
        int ties = 0;

        // 게임 시작
        while (userWins < requiredWins && computerWins < requiredWins) {
            System.out.println("\n가위, 바위, 보 중 하나를 입력하세요: ");
            String userChoice = getValidChoice(scanner);

            // 컴퓨터의 선택
            String computerChoice = getComputerChoice(random);
            System.out.println("상대방은 " + computerChoice + "를 제출했습니다.");

            // 결과 판별
            String result = judgeGame(userChoice, computerChoice);
            if (result.equals("승리")) {
                userWins++;
                System.out.println("당신이 승리했습니다!");
            } else if (result.equals("패배")) {
                computerWins++;
                System.out.println("상대방이 승리했습니다!");
            } else {
                ties++;
                System.out.println("무승부입니다!");
            }

            // 현재 점수 출력
            System.out.println("현재 점수 - 당신: " + userWins + " / 상대방: " + computerWins + " / 무승부: " + ties);
        }

        // 게임 종료 후 승자 출력
        if (userWins == requiredWins) {
            System.out.println("\n가위바위보 게임을 승리했습니다! 게임 종료");
        } else {
            System.out.println("\n상대방이 승리했습니다. 게임 종료");
        }

        // 다시 시작할 것인지 묻기
        System.out.println("게임을 다시 시작하시겠습니까? (Y/N)");
        if (scanner.nextLine().equalsIgnoreCase("Y")) {
            main(args); // 재귀 호출을 통해 게임 재시작
        } else {
            System.out.println("게임을 종료합니다.");
        }

        scanner.close();
    }

    // 승리해야 할 횟수 입력 검증
    private static int getValidWins(Scanner scanner) {
        int wins = 0;
        while (true) {
            try {
                wins = Integer.parseInt(scanner.nextLine());
                if (wins <= 0 || wins > 5) {
                    System.out.println("[ERROR] 승리를 위한 횟수는 1과 5 사이여야 합니다. 다시 입력해주세요.");
                } else {
                    break;
                }
            } catch (NumberFormatException e) {
                System.out.println("[ERROR] 잘못된 입력입니다. 숫자로 입력해주세요.");
            }
        }
        return wins;
    }

    // 가위, 바위, 보 중에서 유효한 입력 받기
    private static String getValidChoice(Scanner scanner) {
        String choice = "";
        while (true) {
            choice = scanner.nextLine().trim();
            if (choice.equals("가위") || choice.equals("바위") || choice.equals("보")) {
                break;
            } else {
                System.out.println("[ERROR] 잘못된 입력입니다. 가위, 바위, 보 중 하나를 입력해주세요.");
            }
        }
        return choice;
    }

    // 컴퓨터의 선택
    private static String getComputerChoice(Random random) {
        String[] choices = {"가위", "바위", "보"};
        return choices[random.nextInt(3)];
    }

    // 게임 결과 판별
    private static String judgeGame(String userChoice, String computerChoice) {
        if (userChoice.equals(computerChoice)) {
            return "무승부";
        }
        switch (userChoice) {
            case "가위":
                return computerChoice.equals("보") ? "승리" : "패배";
            case "바위":
                return computerChoice.equals("가위") ? "승리" : "패배";
            case "보":
                return computerChoice.equals("바위") ? "승리" : "패배";
            default:
                return "무승부";
        }
    }
}


이런 식으로 내용을 수정하면 어떠실까요? 제안드려봅니다!!