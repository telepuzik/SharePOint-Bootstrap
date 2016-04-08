$site = Get-SPweb "http://localhost"
$site.MasterUrl = "/_catalogs/masterpage/seattle_bootstrap.master"
$site.CustomMasterUrl = "/_catalogs/masterpage/seattle_bootstrap.master"
$site.Update()
$site.Dispose()