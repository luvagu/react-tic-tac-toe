import { useState } from 'react'

function Cell() {
	const [value, setValue] = useState(null)

	return (
		<div className={`cell ${value ? value : ''}`} onClick={() => setValue('x')} />
	)
}

export default Cell
