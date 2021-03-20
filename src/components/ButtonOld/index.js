import React from 'react'
import styles from './styles.module.scss'
import Link from '../Link'

const ButtonOld = ({ link, cta, ...props }) => {
	return (
		<Link to={link} {...props}>
			<button className={styles.boton}>{cta}</button>
		</Link>
	)
}


ButtonOld.defaultProps = {
	link:
		'./',
	cta: 'Nueva fecha',
}


export default ButtonOld