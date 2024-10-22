# 프로그래머스 K번째수

**문제 )**
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
2에서 나온 배열의 3번째 숫자는 5입니다.
배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

**해결과정)**
먼저 (commands[0] 수) ~ (commands[1] 수)까지 array 자르기
그리고 mergeSort를 사용해 배열 내 요소를 순서대로 정렬하기
마지막으로 그 정렬한 배열의 (commands[2])번째 숫자를 결과에 넣어주면 될 것이라 큰 틀을 잡음!

제한사항이 통과가 되는 것이 우선이므로, array와 commands의 제한사항들을 구분하여 함수를 만들었다. if문을 사용해, 통과됐을 경우에 코드가 실행되도록 했다.
commands는 배열들의 모음이므로 for..of 반복문을 돌려주어 배열들을 하나씩 펼쳐준다.
그리고 slice를 사용해 배열을 잘라주는데, slice(a,b)일 때 a번째 인덱스 값 다음부터 b번째 인덱스 값까지 잘라준다는 의미이므로 원하는 값을 얻기위해 i[0]-1을 했다. push도 마찬가지다.

주어진 배열을 반으로 나누어 왼쪽과 오른쪽 배열을 나누는 함수, 그리고 배열을 정렬한 후 정렬된 왼쪽과 오른쪽 배열을 받아 각 원소의 크기를 비교해 하나로 합치는 함수를 만들어 머지소트를 구현했다. mergeSort return에서 재귀함수 부분이 잘 이해가 가지 않아, 순서를 직접 그려보며 이해를 도왔다.
또한 기존 배열에 원소를 추가하는 push와 두 개 이상의 배열을 병합하는 concat의 차이를 구분해 사용했다.
