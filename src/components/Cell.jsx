function Cell({ value, ...props }) {
	return (
		<div className={`cell ${value ? value : ''}`} {...props} />
	)
}

export default Cell
