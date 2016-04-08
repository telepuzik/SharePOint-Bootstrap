$site = Get-SPweb "http://localhost"
$site.MasterUrl = "/_catalogs/masterpage/seattle.master"
$site.CustomMasterUrl = "/_catalogs/masterpage/seattle.master"
$site.Update()
$site.Dispose()