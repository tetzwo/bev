import React from "react"

export default function ContainerFluid({ children }) {
  return (
    <div className="container-fluid">
      {children}
    </div>
  )
}