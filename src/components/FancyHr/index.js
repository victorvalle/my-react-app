import React from 'react'
import styles from './styles.module.scss'

const FancyHr = ({ top }) => {
	return (
		<div
			className={`${styles.fancyHr} && ${top ? styles.top : styles.bottom}`}
		>
			<img
				alt=''
                className={styles.start}
				src={`${top	? require('../../images/break1.png') : require('../../images/leaf-left.png')}`}
				/>
			<hr />
			<img
				alt=''
                className={styles.end}
				src={`${
							top
								? require('../../images/leaf-right.png')
								: require('../../images/break2.png')
						}`}
			/>
		</div>
	)
}

export default FancyHr
