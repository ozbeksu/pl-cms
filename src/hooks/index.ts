import slug from 'slug';

/**
 * Trims 'slugifyFrom' field and slugifies 'fieldName'
 *
 * @param {object} siblingData
 * @param {string} slugifyFrom
 * @param {string} fieldName
 */
export const slugifyOnValidate = (
  {siblingData},
  slugifyFrom: string = 'name',
  fieldName: string = 'slug',
) => {
  siblingData[slugifyFrom] = String(siblingData[slugifyFrom]).trim();
  siblingData[fieldName] = slug(siblingData[slugifyFrom]);
};
