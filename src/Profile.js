import React from 'react';
import WithRouterSample from './WithRouterSample';

//  프로필에서 사용할 데이터
const profileData = {
	hansaemgo: {
		name: '고한샘',
		description: 'React-router tutorial'
	},
	homer: {
		name: '호머 심슨',
		description: '심슨가족에 나오는 아빠역할 캐릭터'
	}
};

function Profile({ match }) {
	// 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조합니다.
	const { username } = match.params;
	const profile = profileData[username];

	if (!profile) {
		return <div>존재하지 않는 사용자 입니다.</div>;
	}

	return (
		<div>
			<h3>
				{username} ({profile.name})
			</h3>
			<p>{profile.description}</p>
			<WithRouterSample />
		</div>
	);
}

export default Profile;
