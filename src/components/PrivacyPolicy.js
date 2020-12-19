import React from 'react';
import FileViewer from 'react-file-viewer';

const file = '/privacy-policy-format-Cuisine.pdf'
const type = 'pdf'
const props = {
    allowFullScreen: true,
};

function PrivacyPolicy() {

    return (

        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            <div className="col-sm-6 col-md-12">
                <FileViewer opts={props}
                    fileType={type}
                    filePath={file} />
            </div>
        </div>
    );
}

export default PrivacyPolicy;