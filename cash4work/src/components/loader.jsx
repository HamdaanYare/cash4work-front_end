import React from "react"
import animation from "../assets/animations/loader.json"
import { Player } from "@lottiefiles/react-lottie-player"
import ModalBackdrop from "./modalBackdrop"

// Loader component to render on loading states
function Loader() {
	return (
		<ModalBackdrop>
			<div className="flex-1 bg-tranparentDark grid place-items-center">
				<Player
					src={animation}
					className="player"
					autoplay
					loop
					speed={1}
					style={{ height: "200px", width: "200px" }}
				/>
			</div>
		</ModalBackdrop>
	)
}

export default Loader
