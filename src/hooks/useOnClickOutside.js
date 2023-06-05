import { useRef, useState } from 'react'
import { useEffect } from 'react'

export default function useOnClickOutside(initialVisible) {
	const [isShow, setIsShow] = useState(initialVisible)
	const ref = useRef(null)
	isShow
		? document.body.classList.add('m-hidden')
		: document.body.classList.remove('m-hidden')
	const handleClickOutside = event => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false)
		}
	}
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	})
	return { ref, isShow, setIsShow }
}
