import React from 'react';
import '../fonts/fonts.css'
import '../styles/header.styles.css'
import '../styles/style.css'

const Header: React.FC<any> = () => {

	return (
		<header>
			<div className = "header__body">
				
				<div className = "header__body__container">
					
					<div className = "controll">
						<Turn />			
						<Unwrap />			
						<Close />			
					</div>	

				</div>	

			</div>		
		</header>	
	)	

}

const Close: React.FC<any> = () =>{

	const handleClose = () => {
		console.log(window.electron)
		if (window.electron) {
			window.electron.sendIpcMessage('close-window', {});  // добавлен второй аргумент, если требуется
		} else {
			console.error("Какое-то гейство");
		}
  };

	return (
		<i onClick = {handleClose} className="close icon-close">
			
		</i>	
	)
}

const Turn: React.FC<any> = () =>{
	
	return (
		<i className="turn icon-minus">
			
		</i>
	)
}

const Unwrap: React.FC<any> = () =>{
	
	return (
		<i className="turn icon-checkbox">
			
		</i>
	)
}

export default Header;


