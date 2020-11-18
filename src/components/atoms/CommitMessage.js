import PropTypes from 'prop-types'

export default function CommitMessage({latestCommit}) {
    return <span>{latestCommit.message}</span>
}

export const latestCommitValidation = PropTypes.shape({
    message: PropTypes.string.isRequired
})

CommitMessage.propTypes = {
    latestCommit: latestCommitValidation
}