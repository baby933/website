import React from 'react'
import SolutionsData from 'data/Solutions.json'
import { useRouter } from 'next/router'
import ProductIcon from '../ProductIcon'
import { Typography, Badge } from '@supabase/ui'

const Product = () => {
  const { basePath } = useRouter()

  const iconSections = Object.values(SolutionsData).map((solution) => {
    const { name, description, icon, label, url } = solution

    const content = (
      <div className="flex lg:flex-col">
        <div className="flex flex-row items-center">
          <ProductIcon icon={icon} />
          <div>
            <Typography.Title level={5} className="ml-3 mb-0">
              {name}
            </Typography.Title>
          </div>
        </div>
        <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
          <Typography.Text>
            <p className="mt-1 text-sm">{description}</p>
          </Typography.Text>
          {label && (
            <div>
              <Badge>{label}</Badge>
            </div>
          )}
        </div>
      </div>
    )
    return (
      url && (
        <a
          key={name}
          href={url}
          className="p-3 col-span-6 rounded hover:bg-gray-50 dark:hover:bg-dark-700 transition"
        >
          {content}
        </a>
      )
    )
  })

  return (
    <div className="grid grid-cols-12">
      <nav className="col-span-6" aria-labelledby="solutionsHeading">
        <div className="grid grid-cols-12 m-3 gap-3">{iconSections}</div>
      </nav>
      <div className="col-span-6">
      </div>
    </div>
  )
}

export default Product
