// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { eventChannel } from 'redux-saga';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { call, put, take, takeLatest } from 'redux-saga/effects';

import { UserLoginError, UserLoginSuccess, UserLoginRequest } from './slice';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function * UserLogin ({ payload }: any) {
  yield put(UserLoginSuccess((navigator.onLine)));
  yield put(UserLoginError((navigator.onLine)));

  console.log('username, password', payload);
  // const channel = yield call(getOnlineChannel);

  // yield put(onlineStatusChange(navigator.onLine));

  // while (true) {
  //   const status: boolean = yield take(channel);
  //   yield put(onlineStatusChange(status));
  // }
}

export default function * () {
  yield takeLatest(UserLoginRequest, UserLogin);
}
// export default userLogin;
