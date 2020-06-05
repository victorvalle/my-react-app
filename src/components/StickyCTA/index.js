import React, {Component} from 'react'
import styles from './styles.module.scss'
import Button from '../Button'

export default class ScrollArrow extends Component {
        state = {
        	isTop: true,
        }

        componentDidMount() {
        	document.addEventListener('scroll', () => {
        		const isTop = window.scrollY < 700
        		if (isTop !== this.state.isTop) {
        			this.setState({ isTop })
        		}
        	})
        }

        render() {
	return (
		<div
			className={`${styles.wrapper} ${
				this.state.isTop ? styles.hidden : styles.visible
			}`}
		>
			<div className={styles.StickyCTA}>
				<div className={styles.calendarIcon}>
					<span>Set</span>
					<span>18</span>
				</div>
				<div className={styles.dayTime}>
					<span>Septiembre 18</span>
					<span>Viernes 18:00</span>
				</div>
				<div style={{ margin: 'auto' }} />
				<Button />
			</div>
		</div>
	)
}
}