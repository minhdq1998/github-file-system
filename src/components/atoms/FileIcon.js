import PropTypes from 'prop-types'

export default function FileIcon({type}) {
    function fileIconByCondition(type) {
        return type === 'folder' ? 
            <i className="fa fa-folder"></i> : 
            <i className="fa fa-file"></i>
    }

    return <span className="file-icon">
        { fileIconByCondition(type) }
    </span>
}

export const typeValidation = PropTypes.string.isRequired;

FileIcon.propTypes = {
    type: typeValidation
}