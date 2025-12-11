# Quick script to start a local web server for the website
Write-Host "Starting local web server for website..." -ForegroundColor Cyan
Write-Host "Website will be available at: http://localhost:8000" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop the server`n" -ForegroundColor Gray

# Check if Python is available
$python = Get-Command python -ErrorAction SilentlyContinue
if ($python) {
    python -m http.server 8000
} else {
    # Try Python 3
    $python3 = Get-Command python3 -ErrorAction SilentlyContinue
    if ($python3) {
        python3 -m http.server 8000
    } else {
        Write-Host "Python not found. Please install Python or use a different web server." -ForegroundColor Red
        Write-Host "Alternatively, you can open index.html directly in your browser." -ForegroundColor Yellow
    }
}

