CarrierWave.configure do |config|
  config.fog_provider = 'fog/aws'
  config.fog_credentials = {
    provider: 'AWS',
    aws_access_key_id: ENV['aws_access_key_id'],
    aws_secret_access_key: ENV['aws_secret_access_key'],
    region: ENV['aws_region']
  }
  config.fog_directory = ENV['s3_bucket']
  config.fog_public = false
  config.fog_attributes = { cache_control: "public, max-age=#{365.days.to_i}" }

end

if Rails.env.test? || Rails.env.cucumber?
  CarrierWave.configure do |config|
    config.storage = :file
    config.enable_processing = false
  end
end
