# Redux Counter Example w/ React Native

Back in September 2016 I created this small example to deep into React Native and Redux. It based on the [original Redux Counter example](https://github.com/rackt/redux/tree/master/examples/counter).

Today it helps me to check (breaking) changes if a new version of React Native is released every two weeks.

So it should be up-to-date with the latest dependencies:
- [React Native](https://facebook.github.io/react-native/) 0.21.0
- [Redux](https://github.com/rackt/redux) (v.3.3.1)
- [React Redux](https://github.com/rackt/react-redux) (v.4.4.0)
- [ES2015](http://www.ecma-international.org/ecma-262/6.0/)

![Screen shot](./wiki/redux-counter.gif)


## installation issues?

Got an issue like this?

```
Error building DependencyGraph: Error: Naming collision detected:
...
./node_modules/react/node_modules/fbjs/lib/warning.js collides with ./node_modules/react-native/node_modules/fbjs/lib/warning.js
```

Solution: Use `npm` > v3 as mentioned by [zxcpoiu](https://github.com/zxcpoiu) here: [Update React Native installation instructions](https://github.com/reactjs/react-redux/issues/236#issuecomment-185040066)

P.S. This project is just for fun - have fun :)

-Jens
