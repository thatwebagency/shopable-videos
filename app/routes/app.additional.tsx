import { Box, Layout, Card, MediaCard, Form, FormLayout, Button, LegacyStack, Thumbnail, VideoThumbnail, DropZone, Page, Text } from '@shopify/polaris';
import { CameraMajor } from '@shopify/polaris-icons';
import { useState, useCallback } from 'react';


export default function AdditionalPage() {
  const [files, setFiles] = useState<File[]>([]);

  const handleDropZoneDrop = useCallback(
    (_dropFiles: File[], acceptedFiles: File[], _rejectedFiles: File[]) =>
      setFiles((files) => [...files, ...acceptedFiles]),
    [],
  );

// Add video mime types to this list
const validVideoTypes = ['video/mp4', 'video/webm', 'video/mov'];
const fileUpload = !files.length && <DropZone.FileUpload />;
  const uploadedFiles = files.length > 0 && (
    <div style={{padding: '0'}}>
      <LegacyStack vertical>
        {files.map((file, index) => (
          <LegacyStack alignment="center" key={index}>
            <VideoThumbnail
              videoLength={80}
              thumbnailUrl={url}
              onClick={() => console.log('clicked')}
              
            />
            <div>
              {file.name}{' '}
              <Text variant="bodySm" as="p">
                {file.size} bytes
              </Text>
            </div>
          </LegacyStack>
        ))}
      </LegacyStack>
    </div>
  );


  return (
    <Page>
      <ui-title-bar title="Additional page" />
      <Layout>
       <Layout.Section>
        <Card>
        <DropZone onDrop={handleDropZoneDrop}>
      {uploadedFiles}
      {fileUpload}
    </DropZone>
        </Card>
      </Layout.Section>
      </Layout>
    </Page>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <Box
      as="span"
      padding="025"
      paddingInlineStart="100"
      paddingInlineEnd="100"
      background="bg-surface-active"
      borderWidth="025"
      borderColor="border"
      borderRadius="100"
    >
      <code>{children}</code>
    </Box>
  );
}
