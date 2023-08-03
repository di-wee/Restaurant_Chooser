import { Box, Typography } from '@mui/material';
import React from 'react';
const style = {
	margin: '2rem',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	textAlign: 'center',
};

const Anything = () => {
	return (
		<div>
			<Box sx={style}>
				<Box
					component="img"
					sx={{
						height: 233,
						width: 350,
						maxHeight: { xs: 233, md: 167 },
						maxWidth: { xs: 350, md: 250 },
					}}
					src="../images/mcdonalds.png"
				></Box>
				<Typography variant="h6">MCDONALDS LOR 🤡</Typography>
			</Box>
		</div>
	);
};

export default Anything;
