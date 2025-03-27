import {
  RecordBatchReader,
  RecordBatch,
  RecordBatchStreamReader,
  DataType,
} from 'apache-arrow';
import {Transform, TransformCallback} from 'stream';
export class ArrowRecordReaderTransform extends Transform {
  // private session: ReadSession;

  constructor(/*session: ReadSession*/) {
    super({
      objectMode: true,
    });
    // this.session = session;
  }

  _transform(
    serializedRecordBatch: Uint8Array,
    _: BufferEncoding,
    callback: TransformCallback,
  ): void {
    const buf = Buffer.concat([
      // this.session.arrowSchema?.serializedSchema as Uint8Array,
      serializedRecordBatch,
    ]);
    const reader = RecordBatchReader.from(buf);
    callback(null, reader);
  }
}