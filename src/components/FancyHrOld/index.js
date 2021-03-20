import React from 'react'
import styles from './styles.module.scss'

const FancyHrOld = ({ top }) => {
	return (
		<div
			className={`${styles.fancyHr} && ${top ? styles.top : styles.bottom}`}
		>
			<img
				alt=''
                className={styles.start}
				src={`${top	? require('../../images/break1-old.png') : require('../../images/leaf-left-old.png')}`}
				/>
			<hr />
			<img
				alt=''
                className={styles.end}
				src={`${
							top
								? require('../../images/leaf-right-old.png')
								: require('../../images/break2-old.png')
						}`}
			/>
		</div>
	)
}

export default FancyHrOld
