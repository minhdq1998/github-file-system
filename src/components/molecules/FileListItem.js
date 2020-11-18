import PropTypes from 'prop-types';
import FileIcon from '../atoms/FileIcon';
import FileName from './../atoms/FileName'
import CommitMessage from './../atoms/CommitMessage'
import Time from './../atoms/Time'

import { nameValidation } from './../atoms/FileName' 
import { typeValidation } from './../atoms/FileIcon'
import { latestCommitValidation } from './../atoms/CommitMessage'
import { timeValidation } from './../atoms/Time'

export default function FileListItem({file}) {
return (
    <tr>
        <td>
            <FileIcon type={file.type} /><FileName name={file.name} /> 
        </td>
        <td><CommitMessage latestCommit={file.latestCommit} /></td>
        <td className="age"><Time time={file.updated_at} /></td>
    </tr>
    )
}

FileListItem.propTypes = {
    file: PropTypes.shape({
        name: nameValidation,
        type: typeValidation,
        latestCommit: latestCommitValidation,
        updated_at: timeValidation
    })
}