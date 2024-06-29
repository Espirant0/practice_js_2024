import React, {Fragment} from 'react';
import Fade from 'react-reveal/Fade';

const AnimatedSection = ({children}) => {
	return (
		<Fragment>
			<Fade bottom>
				{children}
			</Fade>
		</Fragment>
	);
};

export default AnimatedSection;
