// ########### Questions #############################################################################
const sessions = [
  { user: 8, duration: 50, equipment: ['bench'] },
  { user: 7, duration: 150, equipment: ['dumbbell'] },
  { user: 1, duration: 10, equipment: ['barbell'] },
  { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
  { user: 7, duration: 200, equipment: ['bike'] },
  { user: 2, duration: 200, equipment: ['treadmill'] },
  { user: 2, duration: 200, equipment: ['bike'] },
];

selectData(sessions);
// [
//   { user: 8, duration: 50, equipment: ['bench'] },
//   { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },
//   { user: 1, duration: 10, equipment: ['barbell'] },
//   { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
//   { user: 7, duration: 200, equipment: ['bike'] },
//   { user: 2, duration: 200, equipment: ['treadmill'] },
//   { user: 2, duration: 200, equipment: ['bike'] },
// ];

selectData(sessions, { user: 2 });
// [
//   { user: 2, duration: 200, equipment: ['treadmill'] },
//   { user: 2, duration: 200, equipment: ['bike'] },
// ];

selectData(sessions, { minDuration: 200 });
// [
//   { user: 7, duration: 200, equipment: ['bike'] },
//   { user: 2, duration: 200, equipment: ['treadmill'] },
//   { user: 2, duration: 200, equipment: ['bike'] },
// ];

selectData(sessions, { minDuration: 400 });
// [];

selectData(sessions, { equipment: ['bike', 'dumbbell'] });
// [
//   { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },
//   { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
//   { user: 7, duration: 200, equipment: ['bike'] },
//   { user: 2, duration: 200, equipment: ['bike'] },
// ];

selectData(sessions, { merge: true });
// [
//   { user: 8, duration: 50, equipment: ['bench'] },
//   { user: 1, duration: 10, equipment: ['dumbbell'] },
//   { user: 7, duration: 450, equipment: ['bike', 'dumbbell', 'kettlebell'] },
//   { user: 2, duration: 400, equipment: ['bike', 'treadmill'] },
// ];

selectData(sessions, { merge: true, minDuration: 400 });
// [
//   { user: 7, duration: 450, equipment: ['bike', 'dumbbell', 'kettlebell'] },
//   { user: 2, duration: 400, equipment: ['bike', 'treadmill'] },
// ];

// ########### Solution ##############################################################################
// 두 Set가 겹치는게 있는지 확인하는 함수
function setHasOverlap(setA, setB) {
  for (const val of Array.from(setA)) {
    if (setB.has(val)) {
      return true;
    }
  }
  return false;
}

// 디폴트 함수
export default function selectData(sessions, options = {}) {
  // options에 괄호 채운건 프라퍼티 호출할때 에러 방지
  const reversedSessions = sessions.slice().reverse();
  const sessionsForUser = new Map();
  const sessionsProcessed = [];

  reversedSessions.forEach((session) => {
    //----- 옵션에 merge가 있고, Map으로 만든 sessionsForUser에 현 데이터 user가 이미 존재하는경우
    if (options.merge && sessionsForUser.has(session.user)) {
      const userSession = sessionsForUser.get(session.user);
      userSession.duration += session.duration; // 이미 존재하는 duration에 현재 duration을 더해서 입력
      session.equipment.forEach((equipment) => {
        // 이미 존재하는 배열 equipment 데이터들을 현재 것에 덧붙임
        userSession.equipment.add(equipment);
      });
      //----- merge가 없거나 sessionsForUser에 현 데이터 user가 없는경우
    } else {
      // equipment를 Set형태로 바꾼 클론 생성
      const clonedSession = {
        ...session,
        equipment: new Set(session.equipment),
      };
      // 옵션에 merge가 있으면 빈 sessionsForUser Map에 user번호 키와, 해당 세션 clonedSession을 입력
      if (options.merge) {
        sessionsForUser.set(session.user, clonedSession);
      }
      // 최종적으로 sessionsProcessed에 clonedSession추가
      sessionsProcessed.push(clonedSession);
    }
  });

  sessionsProcessed.reverse();

  const results = [];
  const optionEquipments = new Set(options.equipment);
  sessionsProcessed.forEach((session) => {
    if (
      // options에 user가 존재하면 ---> options.user와 session.user가 같은 것만 results에 저장
      (options.user !== undefined && options.user !== session.user) ||
      // optionEquipments가 존재하면 ---> 두 Set가 겹치는것만 results에 저장
      (optionEquipments.size > 0 &&
        !setHasOverlap(optionEquipments, session.equipment)) ||
      // options에 minDuration이 존재하면 --->  minDuration보다 큰것들만 results에 저장
      (options.minDuration !== undefined &&
        options.minDuration > session.duration)
    ) {
      return;
    }

    results.push({
      ...session,
      equipment: Array.from(session.equipment).sort(), // Set에서 배열로 다시 변경후 정렬
    });
  });

  return results;
}
