import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import './ImageButton.css';

const ImagesButton = () => {
	const images = [
		{
			url: '../../images/asian.png',
			title: 'Asian Food',
			width: '40%',
		},
		{
			url: '../../images/western.png',
			title: 'Western Food',
			width: '40%',
		},
	];

	return (
		<div className="buttons">
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					minWidth: 300,
					width: '100%',
					justifyContent: 'center',
				}}
			>
				{images.map((image) => (
					<ButtonBase
						focusRipple
						key={image.title}
						className="imageButton"
						style={{
							width: image.width,
							margin: '1rem',
						}}
					>
						<span
							className="imageSrc"
							style={{ backgroundImage: `url(${image.url})` }}
						></span>
						<span className="imageBackdrop MuiImageBackdrop-root"></span>
						<span className="image">
							<Typography
								style={{
									position: 'relative',
									padding: '16px',
									paddingTop: '8px',
									paddingBottom: 'calc(8px + 6px)',
								}}
							>
								{image.title}
								<span className="imageMarked MuiImageMarked-root"></span>
							</Typography>
						</span>
					</ButtonBase>
				))}
			</Box>
		</div>
	);
};

export default ImagesButton;
