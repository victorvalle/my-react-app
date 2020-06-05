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


Button.defaultProps = {
	link:
		'https://docs.google.com/forms/d/e/1FAIpQLSccjBLFpVGyLkPyBj1SbkdB6PQbkSRBeNMcVzjmGhSkEOyj9g/viewform?usp=sf_link',
	cta: 'Confirmar',
}


export default Button