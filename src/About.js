import React from 'react';
import qs from 'qs';

function About({ location }) {
	console.log(location);
	const query = qs.parse(location.search, {
		ignoreQueryPrefix: true
	});
	const detail = query.detail === 'true';
	// 쿼리의 파싱결과 값은 문자열
	// parseInt(query.id, 10);
	return (
		<div>
			<h1>소개</h1>
			<p>
				이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트
				입니다.
			</p>
			{detail && <p>detail값이 true입니다.</p>}
		</div>
	);
}

export default About;
