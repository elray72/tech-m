import * as React from 'react';
import styled from 'styled-components';
import { em, rem } from '../../common/css-helpers';
import Page from '../../components/Page';
import ProgressBar from '../../components/Progress';
import Bar from '../../components/Progress/Bar';

const ProgressBarWrapper = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	max-width: ${em(480)};
	margin: 0 auto;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const H1 = styled.h1`
	font-size: ${rem(24)};
	align-self: flex-start;
`;

const Home: React.FC = () => {
	return (
		<Page>
			<ProgressBarWrapper>
				<H1>Progress bar</H1>
				<ProgressBar>
					<Bar id="bar_1" />
					<Bar id="bar_2" value={50} />
					<Bar id="bar_3" value={75} />
				</ProgressBar>
			</ProgressBarWrapper>
		</Page>
	);
};

export default Home;
