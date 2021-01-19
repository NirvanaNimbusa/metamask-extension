import React from 'react'
import PropTypes from 'prop-types'

export default function LoadingIndicator({ isLoading, children = null }) {
  return isLoading ? (
    <span className="loading-indicator">
      <img
        className="loading-indicator__spinner"
        alt="loading indicator"
        src="images/loading.svg"
      />
    </span>
  ) : (
    children
  )
}

LoadingIndicator.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node,
}
