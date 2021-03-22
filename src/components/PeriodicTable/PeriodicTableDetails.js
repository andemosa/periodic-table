import React, { useState } from 'react'
import { useDataLayerValue } from '../../context-api/DataLayer'
import '../../styles/PeriodicTableDetails.css'
import PTDetailHeader from '../PTDetailComponents/PTDetailHeader'
import OverviewImage from '../../ico/overview.svg'
import PropertiesImage from '../../ico/property.svg'
import AtomicPropertiesImage from '../../ico/property.svg'
import ReactivityImage from '../../ico/reactivity.svg'
import PTDetailLabel from '../PTDetailComponents/PTDetailLabel'
import PTDetailValue from '../PTDetailComponents/PTDetailValue'
import Modal from 'react-modal'
import { actionTypes } from '../../context-api/reducer'


function PeriodicTableModalDetails(props) {
  const[{ periodicDetails, periodicSelectedElement }, dispatch] = useDataLayerValue()
	const element = periodicSelectedElement
  // console.log(periodicTable)

	const [isModalOpen, setIsModalOpen] = useState(periodicDetails)
	const closeDetailsModal = (boolVal) => {
		setIsModalOpen(boolVal)
		dispatch({
			type: actionTypes.SET_DETAILS_MODAL,
			periodicDetails: boolVal
		})
	}

  const processNull = (value) => {
    return (value === null) ? '--' : value
  }

	const calculateTempEquivs = (value) => {
		const kelvin = value
		// 1K − 273.15 = -272.1°C
		const celsius = kelvin - 273.15
		const fahrenheit = (celsius * 9/5) + 32
		const temp = `${kelvin}K = ${celsius}°C = ${fahrenheit}°F`
    return temp
  }
	

  return (
    <Modal overlayClassName="pt-detail-container"
					className="modal-content"
					isOpen={periodicDetails}
					contentLabel={"Calcium Details"}
					shouldCloseOnOverlayClick={true}
					onRequestClose={() => {
						closeDetailsModal(isModalOpen)
					}}
		>
      <aside>
				<section className="pt-det-holder">
					<PTDetailHeader />
					<footer className="pt-det-footer-box">
						{/* label */}
						<PTDetailLabel image={OverviewImage} label="Overview" />
						<PTDetailValue label="Name: " value={element?.name} />
						<PTDetailValue label="Summary: " value={element?.summary} />
						<PTDetailValue label="Discovered by: " value={element?.discovered_by} />
						<PTDetailValue label="Named by: " value={processNull(element?.named_by)} />
						<PTDetailValue label="Appearance: " value={processNull(element?.appearance)} />
						<PTDetailValue label="Electron Shells: " value={
							console.log(element?.shells)
						} />
						<PTDetailValue label="Color: " value={processNull(element?.color)} />
						{/* label */}
						<PTDetailLabel image={PropertiesImage} label="Properties" />
						<PTDetailValue label="Atomic Number: " value={element?.number} />
						<PTDetailValue label="Atomic Mass: " value={`${element?.atomic_mass} (g/mol)`} />
						<PTDetailValue label="Density: " value="1.55(g/cm <sup>3</sup>)" />
						<PTDetailValue label="Phase: " value={element?.phase} />
						<PTDetailValue label="Melting Point: " value={calculateTempEquivs(element?.melt)} />
						<PTDetailValue label="Boiling Point: " value={calculateTempEquivs(element?.boil)} />
						<PTDetailValue label="Molar Heat: " value={`${element?.molar_heat} J/(mol·K)`} />
						<PTDetailValue label="Group: " value={element?.xpos} />
						<PTDetailValue label="Period: " value={element?.ypos} />
						<PTDetailValue label="Emmision spectrum: " value="image here" />
						{/* label */}
						<PTDetailLabel image={AtomicPropertiesImage} label="Atomic Properties" />
						<PTDetailValue label="Electron Configuration: " value={element?.electron_configuration} />
						{/* label */}
						<PTDetailLabel image={ReactivityImage} label="Reactivity" />
						<PTDetailValue label="Electronegativity Pauling: " value={element?.electronegativity_pauling} />
						<PTDetailValue label="Electron Affinity: " value={`${element?.electron_affinity} kJ/mol`} />
					</footer>
				</section>
				<div className="minimal-space"></div>
			</aside>
    </Modal>
  )
}

export default PeriodicTableModalDetails
