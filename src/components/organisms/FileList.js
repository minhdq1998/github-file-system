import FileListItem from './../molecules/FileListItem'


export default function FileList({files}) {
    return <table className='filelist-table' >
        <tbody>
            { files.map( file => 
                <FileListItem file={file} key={file.id} />
            ) }
        </tbody>
    </table>
}