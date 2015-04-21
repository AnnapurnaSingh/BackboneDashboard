class Card <ActiveRecord::Base
  def to_s
  self.to_s + " I am a cool card. yay."
  end
end
