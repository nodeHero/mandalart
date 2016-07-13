# Project Mandalart
## about
- 웹서버공부의 무료함을 달래기 위해 node.js 서버를 이용한 mandalart서비스를 만드는 프로젝트
- 기능의 구현보다는 학습에 목표가 있다

## OVERVIEW
![mandalart image](http://3.bp.blogspot.com/-dnpXCKwdmY8/Vlc2a8SyLsI/AAAAAAAAAKQ/O5w4jDYDcX4/s1600/%255B%25EC%259E%2590%25EA%25B8%25B0%25EA%25B3%2584%25EB%25B0%259C%255D%2B%25EC%2598%25A4%25ED%2583%2580%25EB%258B%2588%2B%25EC%2587%25BC%25ED%2597%25A4%25EC%259D%25B4%25EC%259D%2598%2B%25EB%25AA%25A9%25ED%2591%259C%2B%25EB%258B%25AC%25EC%2584%25B1%25ED%2591%259C%25EC%2599%2580%2B%25EB%25A7%258C%25EB%258B%25A4%25EB%259D%25BC%25ED%258A%25B8%25282%2529.jpg)
- invented by
  - 일본 디자이너 이마이즈미 히로아키
  - manda(본질・깨달음) + la(소유・성취) + art
    - 본질을 깨닫는 방법, 목적을 달성하는 기술
- 만다라트 기법
  - 만다라트 한 개는 사각형 아홉 개로 구성된다.
  - 가운데 사각형에 당면한 문제를 적는다.
  - 그 문제를 둘러싼 여덟 칸에 세부과제를 적는다.
  - 각 세부과제를 주변부 사각형의 중심에 옮겨 적는다.
  - 각 세부과제를 둘러싼 여덟 칸에 해결책을 적는다.
  - 세부과제 여덟 개에 각각 해결책 여덟 개를 적으면 총 해결책 64개가 도출된다.
  - 해결책 64개를 결합하거나 분해하면서 발상과 실천을 구체화한다.

## Install
```shell
# package.json 에 선언한대로 설치
npm install
```

## Developing
`gulp local` task를 실행

## Gulp Task
- `clean` : 기존에 합쳐진 파일삭제
- `jsmerge` : js파일을 위의 명세에 따라 합친 후 `public/js`로 이동
- `lessmerge` : less파일을 위의 명세에 따라 합친 후 `public/css`로 이동
- `less` : `public/css`의 모든 less파일을 css로 변경한 후 less파일 삭제
- `watch` : less, js 소스파일이 변경되면 자동으로 다시 합침
- `livereload` : js, less, ejs 소스파일이 변경되면 서버를 내렸다 올림
  - chrome-extension [livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)를 설치하면 새로고침할 필요가 없음(자동으로 해줌. 크롬 짱짱)
- `uglify` : 합쳐진 js파일을 난독화한다.
- `default` : `'clean', 'lessmerge', 'less', 'jsmerge', 'uglify'` 순서로 task 실행
- `local` : `'clean', 'lessmerge', 'less', 'jsmerge', 'livereload', 'watch'` 순서로 task 실행
