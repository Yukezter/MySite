import React from 'react'

const LoadingContext = React.createContext({
  changeLoadingState: () => undefined,
})

export default LoadingContext