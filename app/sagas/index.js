import  recipeSaga from './recipeSaga'

export default function* rootSaga() {
  yield [
    recipeSaga
  ]
}
