import { useState, useEffect } from 'react'

interface ReleaseAsset {
  name: string
  browser_download_url: string
}

interface ReleaseData {
  tag_name: string
  assets: ReleaseAsset[]
}

interface UseLatestReleaseResult {
  downloadUrl: string | null
  version: string | null
  isLoading: boolean
  error: Error | null
}

const GITHUB_API_URL = 'https://api.github.com/repos/koukibuu3/typodot/releases/latest'
const FALLBACK_URL = 'https://github.com/koukibuu3/typodot/releases/latest'

export function useLatestRelease(): UseLatestReleaseResult {
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [version, setVersion] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        const response = await fetch(GITHUB_API_URL)

        if (!response.ok) {
          throw new Error(`Failed to fetch release: ${response.status}`)
        }

        const data: ReleaseData = await response.json()

        // Find the .dmg file in assets
        const dmgAsset = data.assets.find(asset => asset.name.endsWith('.dmg'))

        if (dmgAsset) {
          setDownloadUrl(dmgAsset.browser_download_url)
        } else {
          // Fallback to releases page if no dmg found
          setDownloadUrl(FALLBACK_URL)
        }

        setVersion(data.tag_name)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'))
        // Set fallback URL on error
        setDownloadUrl(FALLBACK_URL)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLatestRelease()
  }, [])

  return { downloadUrl, version, isLoading, error }
}
