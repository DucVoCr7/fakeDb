const { DataTypes } = require('sequelize');

// Default allowNull: true
const id_createdAt_updatedAt = (length = 36) => {
  return {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.CHAR(length),
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  };
};

const id_createdAt_updatedAt_image = () => {
  return {
    imageId: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  };
};

// Infomation person
const name_email_password = (isLessee = false) => {
  return {
    name: {
      allowNull: false,
      type: DataTypes.STRING(120),
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      allowNull: isLessee,
      type: DataTypes.STRING,
    },
  };
};

const birthday_gender = () => {
  return {
    birthday: {
      type: DataTypes.DATEONLY,
    },
    gender: {
      type: DataTypes.TINYINT,
    },
  };
};

const phone_phoneId = (isLessee = false) => {
  return {
    phone: {
      unique: true,
      allowNull: isLessee,
      type: DataTypes.STRING(12),
    },
    phoneId: {
      allowNull: isLessee,
      type: DataTypes.STRING(6),
    },
  };
};

// Address
const addressFull = (isUser = false) => {
  return {
    apartmentId: {
      allowNull: isUser,
      type: DataTypes.CHAR(36),
    },
    streetId: {
      allowNull: isUser,
      type: DataTypes.CHAR(36),
    },
    wardId: {
      allowNull: isUser,
      type: DataTypes.CHAR(5),
    },
    districtId: {
      allowNull: isUser,
      type: DataTypes.CHAR(3),
    },
    provinceId: {
      allowNull: isUser,
      type: DataTypes.CHAR(2),
    },
    countryId: {
      allowNull: isUser,
      type: DataTypes.CHAR(3),
    },
    fullAddress: {
      allowNull: isUser,
      type: DataTypes.TEXT,
    },
  };
};

const lat_lng = () => {
  return {
    lat: {
      type: DataTypes.FLOAT,
    },
    lng: {
      type: DataTypes.FLOAT,
    },
  };
};

const address_name = (length = 255) => {
  return {
    sortName: {
      allowNull: false,
      type: DataTypes.STRING(length),
    },
    fullName: {
      allowNull: false,
      type: DataTypes.STRING(length),
    },
  };
};

// Image
const image_user = () => {
  return {
    image: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    imageId: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  };
};

// Facility
const facility = () => {
  return {
    lessorId: {
      allowNull: false,
      type: DataTypes.CHAR(36),
    },
    totalRooms: {
      allowNull: false,
      type: DataTypes.SMALLINT.UNSIGNED,
      comment: 'T???ng s??? ph??ng',
    },
    totalRoomsRented: {
      allowNull: false,
      type: DataTypes.SMALLINT.UNSIGNED,
      comment: 'T???ng s??? ph??ng ???? cho thu??',
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    adminApproved: {
      type: DataTypes.CHAR(36),
      comment: 'Admin x??t duy???t',
    },
  };
};

// Room - Ph??ng
const room = () => {
  return {
    code: {
      allowNull: false,
      type: DataTypes.SMALLINT.UNSIGNED,
      comment: 'M?? s??? c???a ph??ng',
    },
    status: {
      allowNull: false,
      type: DataTypes.TINYINT,
      comment: 'Tr???ng th??i c???a ph??ng 0: s???n s??ng ????n kh??ch, 1: ??ang c?? kh??ch, 2: ??ang d???n d???p, 3: ??ang s???a ch???a',
    },
  };
};

const name_area_description_roomType = () => {
  return {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    area: {
      allowNull: false,
      type: DataTypes.INTEGER(3).UNSIGNED,
      comment: 'Di???n t??ch (m2)',
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  };
};

const price = () => {
  return {
    priceNormal: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
      comment: 'Gi?? ng??y th?????ng (VND)',
    },
    priceWeekend: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
      comment: 'Gi?? cu???i tu???n (VND)',
    },
    priceHoliday: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
      comment: 'Gi?? ng??y l??? (VND)',
    },
  };
};

// Amenity - Ti???n ??ch
const name_price_description_amenity = () => {
  return {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
      comment: '????n v??? (VND)',
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  };
};

const status_level = (
  commentStatus = 'Tr???ng th??i c???a ?????i t?????ng (0 - Ho???t ?????ng, 1 - Kh??ng ho???t ?????ng, 2 - Ch??a ???????c x??c th???c)',
  commentLevel = 'Ph??n h???ng, ph??n quy???n, ph??n lo???i'
) => {
  return {
    status: {
      allowNull: false,
      type: DataTypes.TINYINT,
      defaultValue: 2,
      comment: commentStatus,
    },
    level: {
      allowNull: false,
      type: DataTypes.TINYINT,
      defaultValue: 0,
      comment: commentLevel,
    },
  };
};

const userId_userType = () => {
  return {
    userId: {
      allowNull: false,
      type: DataTypes.CHAR(36),
      comment: 'Id c???a admin || lessor || lessee',
    },
    userType: {
      allowNull: false,
      type: DataTypes.TINYINT,
      comment: 'X??t lo???i user 0: lessee || 1: lessor || 2: admin',
    },
  };
};

const facilityId_facilityType = () => {
  return {
    facilityId: {
      allowNull: false,
      type: DataTypes.CHAR(36),
      comment: 'Id c???a motel || hotel || resort',
    },
    facilityType: {
      allowNull: false,
      type: DataTypes.TINYINT,
      comment: 'X??t lo???i c?? s??? 0: motel || 1: hotel || 2: resort',
    },
  };
};

const content_status = () => {
  return {
    content: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    status: {
      allowNull: false,
      type: DataTypes.TINYINT,
      defaultValue: 0,
      comment: 'Tr???ng th??i c???a ?????i t?????ng (0 - hi???n, 1 - ???n)',
    },
  };
};
module.exports = {
  id_createdAt_updatedAt_image,
  content_status,
  userId_userType,
  facilityId_facilityType,
  status_level,
  id_createdAt_updatedAt,
  name_email_password,
  phone_phoneId,
  addressFull,
  image_user,
  birthday_gender,
  lat_lng,
  facility,
  address_name,
  price,
  room,
  name_area_description_roomType,
  name_price_description_amenity,
};
