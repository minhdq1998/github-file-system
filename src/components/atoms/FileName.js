import PropTypes from 'prop-types';

export default function FileName({name}) {
    return <span className="file-name">{name}</span>
}

export const nameValidation = PropTypes.string.isRequired

FileName.propTypes = {
    name: nameValidation
}