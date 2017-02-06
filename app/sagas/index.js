import  usersSaga from './usersSaga'

export default function* rootSaga() {
  yield [
    usersSaga
  ]
}
