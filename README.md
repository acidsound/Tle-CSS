# 틀(Tle)-CSS [![Build Status](https://travis-ci.org/acidsound/Tle-CSS.svg)](https://travis-ci.org/acidsound/Tle-CSS)
최소 지향 한글 CSS 프레임워크 - 2016년 8월 19일에 처음 만들었어요.
# 특징
* "틀"은 정말 간단한 CSS 프레임워크예요.
* [milligram](http://milligram.github.io/)에서 많이 가져왔지만 조금 달라요.
* 기본 설정은 거의 호환돼요.
* [한글코딩](http://xn--bj0bv9kgwxoqf.org/)을 지지합니다.
* class이름을 한글로 사용하는게 특징이에요.
* CSS 용량도 작은데 class이름을 한글로 쓰면 유니코드니까 html도 더 작아지겠죠? :)
* IoT(Internet of Things)에도 적합해요. 왜냐면 압축 전송량이 1kb도 안되거든요 (현재 256byte)
![압축전송그래프](https://pbs.twimg.com/media/CqX2oC4UkAAUTSA.jpg:large)

# 설치
https://cdn.jsdelivr.net/gh/acidsound/Tle-CSS@master/dist/tle.css 이쪽을 사용하세요.
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/acidsound/Tle-CSS@master/dist/tle.css">
```

# Meteor에서 설치
```
meteor add spectrum:tlecss
```

# 데모
1. [기본 요소](https://bl.ocks.org/acidsound/a31ef533e6960f81f9de24f7242eea1f)-[프리뷰](https://bl.ocks.org/acidsound/raw/a31ef533e6960f81f9de24f7242eea1f/)
1. [로그인 예제](https://bl.ocks.org/acidsound/ed3a2d2c21cd00540cc503e7843e5103)

# 사용 예
## jade에서 ([meteor-jade](https://atmospherejs.com/spectrum/jade)랑 같이 사용하세요)
### 단추
```
 .단추
 .단추.안됨
 .단추.외곽선
 .단추.외곽선.안됨
 .단추.투명
 .단추.투명.안됨
``` 
 이렇게 쉬운 우리말로 표현하면 돼요. 순서는 상관없고요.
### 숨김 
``` 
 .숨김
```
특정 요소를 안 보이게 해줘요.
### 서식
```
 .한줄
```
서식에서 label을 한 줄로 붙여 쓸 때 사용해요.
### 틀
```
 .틀
   .행.감쌈.시작.종료.중앙.늘임.바닥.붙임
   .열.머리.바닥.중앙
     .열.틈1-10.틈1-5.틈1-4.틈1-3.틈1-2.틈2-3.틈3-4.틈4-5.틈9-10
     .열.칸1-10.칸1-5.칸1-4.칸1-3.칸2-5.칸1-2.칸3-5.칸2-3.칸3-4.칸4-5.칸9-10
```
틈은 벌어진 정도고 ```틈1-4```면 1/4만큼 ```틈1-2```면 1/2만큼 떨어뜨려요.

칸은 한 칸의 크기예요. 틈과 마찬가지로 ```칸1-2```면 1/2, ```칸3-4```면 3/4이죠.
### 붙이고 떨어뜨리고
```
  .오른쪽착
  .왼쪽착
  .떨어져
```
한 줄에 몰아서 붙일 때 사용해요.

```오른쪽착```, ```왼쪽착``` 사용 후 원래대로 되돌리려면 ```떨어져```를 쓰세요.

# 도와주세요?
중국어, 일본어 버전도 있으면 아주 좋을꺼여요!
