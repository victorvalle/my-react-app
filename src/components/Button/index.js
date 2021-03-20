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
		'https://docs.google.com/forms/d/e/1FAIpQLSf17EOEX0A66wPo7toTU1cyj1uF8v6X4_wPL2rE2gAXbJh6Vg/viewform?usp=sf_link',
	cta: 'Confirmar',
}


export default Button