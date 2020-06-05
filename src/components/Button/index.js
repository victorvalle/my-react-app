import React from 'react'
import styles from './styles.module.scss'
import Link from '../Link'

const Button = ({ link, cta, ...props }) => {
	return (
		<Link to={link} {...props}>
			<button className={styles.boton}>{cta}</button>
		</Link>
	)
}

export default Button