import { expect } from 'chai';
import { it } from 'mocha';
import { Types } from 'mongoose';

export default function () {
  it('test Mongoose ObjectIds are not equal', async function () {
    // Arrange
    const id1 = new Types.ObjectId();
    const id2 = new Types.ObjectId();

    // Act
    const isEqual = id1.equals(id2);

    // Assert
    expect(isEqual).to.be.false;
  });

  it('test Mongoose ObjectIds are equal', async function () {
    // Arrange
    const stringId1 = '64b8f1b2e4b0a1a2c3d4e5f6';
    const stringId2 = '64b8f1b2e4b0a1a2c3d4e5f6';

    const id1 = new Types.ObjectId(stringId1);
    const id2 = new Types.ObjectId(stringId2);

    // Act
    const isEqual = id1.equals(id2);

    // Assert
    expect(isEqual).to.be.true;
  });
}
